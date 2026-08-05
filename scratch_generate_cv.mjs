import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({ margin: 40 });
const stream = fs.createWriteStream('public/Gauri-Goswami-CV.pdf');
doc.pipe(stream);

// Styling helpers
const primaryColor = '#1A110B';
const accentColor = '#8C6D2D';

doc.fillColor(primaryColor);

// HEADER
doc.fontSize(18).font('Helvetica-Bold').text('GAURI GOSWAMI', { align: 'center' });
doc.moveDown(0.3);
doc.fontSize(9).font('Helvetica').text('Email: goswamigauri1999@gmail.com | Phone: +91 8822776703', { align: 'center' });
doc.text('Lajpat Nagar IV, Dayanand Colony (A-106), Pin Code: 110024, New Delhi', { align: 'center' });
doc.moveDown(0.5);

doc.moveTo(40, doc.y).lineTo(570, doc.y).strokeColor('#8C6D2D').lineWidth(1).stroke();
doc.moveDown(0.8);

function sectionTitle(title) {
  doc.fontSize(11).font('Helvetica-Bold').fillColor(accentColor).text(title.toUpperCase());
  doc.moveTo(40, doc.y + 2).lineTo(570, doc.y + 2).strokeColor('#CCCCCC').lineWidth(0.5).stroke();
  doc.moveDown(0.4);
  doc.fillColor(primaryColor);
}

// EDUCATION
sectionTitle('Education');
doc.fontSize(10).font('Helvetica-Bold').text('B.A. LLB (Five Years Integrated Course)', { continued: true });
doc.font('Helvetica').text('  |  2018 - 2023', { align: 'right' });
doc.fontSize(9.5).font('Helvetica').text('National Law University and Judicial Academy, Assam');
doc.fontSize(9).font('Helvetica-Bold').text('CGPA: 8.80 / 10.00 (First Class Honors with Distinction)');
doc.moveDown(0.5);

doc.fontSize(10).font('Helvetica-Bold').text('Higher Secondary (Stream: Humanities)', { continued: true });
doc.font('Helvetica').text('  |  2015 - 2017', { align: 'right' });
doc.fontSize(9.5).font('Helvetica').text('Cotton College, Guwahati, Assam');
doc.moveDown(0.8);

// UNDERGRADUATE COURSEWORK
sectionTitle('Undergraduate Coursework');
doc.fontSize(8.5).font('Helvetica').text(
  'Mergers, Acquisitions and Anti-Trust Laws, Law of Writs and Laws relating to Elections, Law of Arbitration, Cyber Law, Law of Equity, Public Interest Litigation, Service Law, International Commercial Laws and Arbitration, Investment Management Laws and CSR, Indian Penal Code, Transfer of Property Act, Code of Criminal Procedure, Corporate Law, Environmental Law, Civil Procedure Code 1908, International Law, Administrative Law, Labour and Industrial Laws, Law of Evidence, International Commercial Transactions, Laws Relating to Intellectual Property Rights.'
);
doc.moveDown(0.8);

// WORK EXPERIENCE
sectionTitle('Work Experience');
doc.fontSize(10).font('Helvetica-Bold').text('Legal Associate at Singhania & Associates, New Delhi', { continued: true });
doc.font('Helvetica').text('  |  Aug 2023', { align: 'right' });
doc.fontSize(8.5).font('Helvetica').text('Responsibilities & Key Litigation Matters:');
doc.fontSize(8.5).font('Helvetica')
  .text('• Drafted Written Submissions and Synopses for National Consumer Disputes Redressal Commission (NCDRC), State Commission & District Forums.')
  .text('• Argued consumer litigation matters before Saini Enclave, Janakpuri, and Shalimar Bagh Consumer Forums, New Delhi.')
  .text('• Appeared before Tis Hazari District Court and Karkardooma Court for civil dispute resolution matters.')
  .text('• Represented matters at the High Court of Delhi.')
  .text('List of Key Cases Worked On:')
  .text('  1. Maruti Suzuki v. Nalinbhai Shah and Others (NCDRC)')
  .text('  2. Anuppama Aggarwal v. Nissan Motors and Others (NCDRC)')
  .text('  3. Maruti Suzuki v. Rita Jain and Others (NCDRC)')
  .text('  4. Vijay Suresh v. Volkswagen and Others')
  .text('  5. Neetu Singh v. Nissan Motors and Others')
  .text('  6. XS Infoways v. Volkswagen and Others')
  .text('  7. Skoda Auto India Volkswagen Pvt. Ltd v. KP Aggarwal and Others')
  .text('  8. Srikant v. Skoda Auto India Pvt. Ltd');
doc.moveDown(0.8);

// INTERNSHIP EXPERIENCE
sectionTitle('Internship Experience');
const internships = [
  ['I. Legal Intern', 'District Legal Service Authority, Guwahati', 'Jun - Jul 2023'],
  ['II. Legal Intern', 'Chambers of Mr. Kaushik Choudhary, AOR, Supreme Court of India', 'Feb 2023'],
  ['III. Legal Intern', 'Chambers of Amit Bhagat, Delhi High Court', 'Jan 2023'],
  ['IV. Legal Intern', 'Chambers of N. Unni Krishnan Nair, Guwahati High Court', 'Jan 2022'],
  ['V. Legal Intern', 'Chambers of Mr. S.P. Roy, Guwahati High Court', 'Jul 2020'],
  ['VI. Legal Intern', 'Consulta Juris Law Firm, Gujarat', 'Jul - Aug 2019'],
  ['VII. Research Intern', 'Abdul Latif Jameel Poverty Action Lab (J-PAL)', 'Dec 2019 - Jan 2020']
];
internships.forEach(([role, org, period]) => {
  doc.fontSize(9).font('Helvetica-Bold').text(`${role} — ${org}`, { continued: true });
  doc.font('Helvetica').text(`  |  ${period}`, { align: 'right' });
});
doc.moveDown(0.8);

// POSITIONS OF RESPONSIBILITY & ACADEMIC PROJECTS
sectionTitle('Positions of Responsibility & Academic Projects');
doc.fontSize(8.5).font('Helvetica')
  .text('• Pro Bono Associate (Nyaya Bandhu), Pro Bono Legal Services Club, NLUJA Assam under Dept of Justice, Ministry of Law & Justice, Govt of India (2023).')
  .text('• Core Committee Member, Public Relations Cell at NSS (National Service Scheme), NLUJA Assam (2021-2022).')
  .text('• Lectured on Domestic Violence & Legal Awareness at Baka Village (Pro Bono Club, Jun 2023).')
  .text('• Legal Awareness Initiative at Guwahati Central Jail as Pro Bono Associate (Jun 2023).')
  .text('• Published Paper: Goswami, Gauri & Boruah, Isheta (Fighting Extremism - The Legal Propositions) Indian Journal of Law & Justice, Vol 11 No 1, March 2020.');
doc.moveDown(0.8);

// AWARDS AND ACHIEVEMENTS
sectionTitle('Awards & Achievements');
doc.fontSize(8.5).font('Helvetica')
  .text('• Second best team at Intra Parliamentary Debate, National Law University and Judicial Academy, Assam (Nov 2018).')
  .text('• Presented with Diplomacy Award (Egypt in UNESCO Committee) on UNSCR 2250 (Oct 2019).')
  .text('• Special mention at Cultural Programme, NLUJA Assam (Nov 2019).')
  .text('• Quarter finalist Speaker at 3rd National Moot Court Competition, Univ of North Bengal (Feb 2020).')
  .text('• Felicitated for relentless service towards organization by Think India, Assam (Jun 2023).')
  .text('• Secured Outstanding Marks (O / Grade Point 10) in 16 Core B.A. LL.B. Subjects at NLUJA Assam (2018-23):')
  .text('  Comparative Legal Systems, Sociology, Jurisprudence, Economics, Constitutional Law I & II, Indian Penal Code, Law of Contract, Administrative Law, Intellectual Property Law, Law of Evidence, International Business Transactions, ADR, Mergers & Acquisitions, International Trade Law.')
  .text('• Enrolled Advocate on the Roll of the Bar Council of Assam, Nagaland, Mizoram, Arunachal Pradesh & Sikkim (Roll No. 2366 of 2023).');
doc.moveDown(0.8);

// SKILLS & LANGUAGES
sectionTitle('Skills & Languages');
doc.fontSize(8.5).font('Helvetica')
  .text('• Technical & Software: Microsoft Office Suite, Final Cut Pro, Corel Draw, LaTeX.')
  .text('• Languages: English (Fluent), Hindi (Fluent), Assamese (Native/Fluent).');

doc.end();

stream.on('finish', () => {
  console.log('Successfully generated public/Gauri-Goswami-CV.pdf');
});
