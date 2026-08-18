import os

file_path = 'app/components/MilestoneExhibition.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

start_str = 'export default function MilestoneExhibition() {'
start_idx = content.find(start_str)

article_start_str = '<article className={`career-detail-compact'
article_start_idx = content.find(article_start_str, start_idx)

article_end_str = '</article>'
article_end_idx = content.find(article_end_str, article_start_idx) + len(article_end_str)

article_content = content[article_start_idx:article_end_idx]

# We need to replace the local references to `isExpanded` in the article to be local state.
# But wait, active, isExpanded, setIsExpanded, setActiveCertModal are used.
card_comp = f"""
function CareerDetailCard({{ active, setActiveCertModal }}: {{ active: Experience, setActiveCertModal: (img: string | null) => void }}) {{
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    {article_content}
  );
}}

"""

# Insert component before MilestoneExhibition
new_content = content[:start_idx] + card_comp + content[start_idx:]

# Find again since indices changed
new_start_idx = new_content.find(start_str)
new_article_start_idx = new_content.find(article_start_str, new_start_idx)
new_article_end_idx = new_content.find(article_end_str, new_article_start_idx) + len(article_end_str)

timeline_start_str = '{/* Timeline Wrapper with Clean Arrow Buttons & Hidden Scrollbar */}'
timeline_start_idx = new_content.find(timeline_start_str, new_start_idx)

new_layout = f"""      {{/* DESKTOP LAYOUT (Hidden on mobile) */}}
      <div className="career-desktop-only">
{new_content[timeline_start_idx:new_article_end_idx]}
      </div>

      {{/* MOBILE LAYOUT (Hidden on desktop) */}}
      <div className="career-mobile-only">
        <div className="career-mobile-slider">
          {{experiences.map((exp, idx) => (
            <CareerDetailCard key={{idx}} active={{exp}} setActiveCertModal={{setActiveCertModal}} />
          ))}}
        </div>
        <div className="mobile-swipe-hint">‹ Swipe to view more ›</div>
      </div>"""

# Replace the original desktop layout in the new content
final_content = new_content[:timeline_start_idx] + new_layout + new_content[new_article_end_idx:]

# Now replace the desktop layout's article inside 'career-desktop-only' with <CareerDetailCard />
# We must do this precisely within the `career-desktop-only` div.
desktop_only_start = final_content.find('<div className="career-desktop-only">')
desktop_only_end = final_content.find('</div>', desktop_only_start)

# Find the article inside it
inner_article_start = final_content.find(article_start_str, desktop_only_start)
inner_article_end = final_content.find(article_end_str, inner_article_start) + len(article_end_str)

final_content = final_content[:inner_article_start] + '        <CareerDetailCard active={active} setActiveCertModal={setActiveCertModal} />\n' + final_content[inner_article_end:]


# Remove 'const [isExpanded, setIsExpanded] = useState(false);' from MilestoneExhibition
expanded_state_str = 'const [isExpanded, setIsExpanded] = useState(false);'
milestone_start = final_content.find(start_str)
last_expanded_idx = final_content.find(expanded_state_str, milestone_start)
if last_expanded_idx != -1:
    final_content = final_content[:last_expanded_idx] + final_content[last_expanded_idx + len(expanded_state_str):]

# Remove handleSelectRole's call to setIsExpanded(false)
final_content = final_content.replace('setIsExpanded(false);', '// setIsExpanded(false); handled by local card state')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

