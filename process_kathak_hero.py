import os
import sys
from PIL import Image, ImageFilter

print("Processing Kathak Hero Image...")

input_path = "public/dance.jpeg"
output_path = "public/dance-removebg.png"

if not os.path.exists(input_path):
    print(f"Error: {input_path} not found!")
    sys.exit(1)

img_jpeg = Image.open(input_path).convert("RGB")
print(f"Loaded {input_path}, size={img_jpeg.size}")

# Try rembg for AI precision background removal
try:
    from rembg import remove
    print("Using rembg AI model to extract subject at high resolution...")
    output_img = remove(img_jpeg)
    print(f"rembg output size: {output_img.size}, mode: {output_img.mode}")
except Exception as e:
    print(f"rembg failed or not available ({e}), falling back to PIL mask scaling...")
    # Fallback to high res alpha mask scaling from original dance-removebg.png onto dance.jpeg
    old_png = Image.open("public/dance-removebg.png").convert("RGBA")
    old_alpha = old_png.split()[3]
    # Resize alpha to high res matching dance.jpeg
    high_res_alpha = old_alpha.resize(img_jpeg.size, Image.Resampling.LANCZOS)
    # Smooth alpha edges slightly
    high_res_alpha = high_res_alpha.filter(ImageFilter.GaussianBlur(radius=0.8))
    output_img = Image.new("RGBA", img_jpeg.size)
    output_img.paste(img_jpeg, (0, 0))
    output_img.putalpha(high_res_alpha)

# Create high-pixel version: 2046x3074 (2x resolution)
w, h = output_img.size
target_size = (w * 2, h * 2)
print(f"Upscaling image to high pixel resolution: {target_size}...")

# Split channels for high-quality upscaling
r, g, b, a = output_img.split()
r = r.resize(target_size, Image.Resampling.LANCZOS).filter(ImageFilter.UnsharpMask(radius=1.2, percent=110, threshold=2))
g = g.resize(target_size, Image.Resampling.LANCZOS).filter(ImageFilter.UnsharpMask(radius=1.2, percent=110, threshold=2))
b = b.resize(target_size, Image.Resampling.LANCZOS).filter(ImageFilter.UnsharpMask(radius=1.2, percent=110, threshold=2))
a = a.resize(target_size, Image.Resampling.LANCZOS)

final_highres = Image.merge("RGBA", (r, g, b, a))

# Save high-res dance-removebg.png
final_highres.save(output_path, "PNG", optimize=True)
print(f"Saved crystal clear high-pixel image to {output_path}!")
print(f"Final file size: {os.path.getsize(output_path)} bytes, dimensions: {final_highres.size}")
