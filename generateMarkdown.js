const licenseList = [
  { name: 'None', type: 'openSource', type: 'openSource', identifier: 'None' },
  { name: 'Academic Free 3.0', type: 'openSource', identifier: 'AFL-3.0' },
  { name: 'Adaptive Public 1.0', type: 'openSource', identifier: 'APL-1.0' },
  { name: 'Apache 2.0', type: 'openSource', identifier: 'Apache-2.0' },
  { name: 'Artistic 2.0', type: 'openSource', identifier: 'Artistic-2.0' },
  { name: 'Boost Software 1.0', type: 'openSource', identifier: 'BSL-1.0' },
  { name: 'BSD 0-clause', type: 'openSource', identifier: '0BSD' },
  { name: 'BSD 1-clause', type: 'openSource', identifier: 'BSD-1-Clause' },
  { name: 'BSD 2-clause', type: 'openSource', identifier: 'BSD-2-Clause' },
  { name: 'BSD 3-clause', type: 'openSource', identifier: 'BSD-3-Clause' },
  { name: 'Common Development and Distribution 1.0', type: 'openSource', identifier: 'CDDL-1.0' },
  { name: 'Creative Commons Zero 1.0 Universal', type: 'creativeCommons', identifier: 'publicdomain/zero/1.0/' },
  { name: 'Creative Commons Attribution 4.0', type: 'creativeCommons', identifier: 'licenses/by/4.0/' },
  { name: 'Creative Commons Attribution Share Alike 4.0', type: 'creativeCommons', identifier: 'licenses/by-sa/4.0/' },
  { name: 'Eclipse Public 2.0', type: 'openSource', identifier: 'EPL-2.0' },
  { name: 'Educational Community 2.0', type: 'openSource', identifier: 'ECL-2.0' },
  { name: 'Eiffel Forum 2.0', type: 'openSource', identifier: 'EFL-2.0' },
  { name: 'Entessa Public', type: 'openSource', identifier: 'Entessa' },
  { name: 'European Union Public 1.2', type: 'openSource', identifier: 'EUPL-1.2' },
  { name: 'Fair', type: 'openSource', identifier: 'Fair' },
  { name: 'Frameworx', type: 'openSource', identifier: 'Frameworx-1.0' },
  { name: 'GNU Affero General Public v3.0', type: 'openSource', identifier: 'AGPL-3.0' },
  { name: 'GNU General Public 2.0', type: 'openSource', identifier: 'GPL-2.0' },
  { name: 'GNU General Public 3.0', type: 'openSource', identifier: 'GPL-3.0' },
  { name: 'GNU Lesser General Public 2.1', type: 'openSource', identifier: 'LGPL-2.1' },
  { name: 'GNU Lesser General Public 3.0', type: 'openSource', identifier: 'LGPL-3.0' },
  { name: 'Historical Permission Norice and Disclaimer', type: 'openSource', identifier: 'HPND' },
  { name: 'IBM Public', type: 'openSource', identifier: 'IPL-1.0' },
  { name: 'IPA Font', type: 'openSource', identifier: 'IPA' },
  { name: 'ISC', type: 'openSource', identifier: 'ISC' },
  { name: 'JAM', type: 'openSource', identifier: 'Jam' },
  { name: 'LaTeX Project Public 1.3c', type: 'openSource', identifier: 'LPPL-1.3c' },
  { name: 'Lucent Public 1.02', type: 'openSource', identifier: 'LPL-1.02' },
  { name: 'Microsoft Public', type: 'openSource', identifier: 'MS-PL' },
  { name: 'Microsoft Reciprocal', type: 'openSource', identifier: 'MS-RL' },
  { name: 'MIT', type: 'openSource', identifier: 'MIT' },
  { name: 'MIT No Attribution', type: 'openSource', identifier: 'MIT-0' },
  { name: 'Mozilla Public 2.0', type: 'openSource', identifier: 'MPL-2.0' },
  { name: 'Non-Profit Open Software 3.0', type: 'openSource', identifier: 'NPOSL-3.0' },
  { name: 'Open Software 3.0', type: 'openSource', identifier: 'OSL-3.0' },
  { name: 'PHP 3.01', type: 'openSource', identifier: 'PHP-3.01' },
  { name: 'PostgreSQL', type: 'openSource', identifier: 'PostgreSQL' },
  { name: 'Python', type: 'openSource', identifier: 'Python-2.0' },
  { name: 'SIL Open Font 1.1', type: 'openSource', identifier: 'OFL-1.1' },
  { name: 'University of Illinois/NCSA Open Source', type: 'openSource', identifier: 'NCSA' },
  { name: 'The Unlicense', type: 'openSource', identifier: 'unlicense' },
  { name: 'W3C', type: 'openSource', identifier: 'W3C' },
  { name: 'zLib', type: 'openSource', identifier: 'Zlib' },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    let license1 = license.replace("-", "--");
    let license2 = license1.replace(" ", "_");
    return licenseBadge = `[![License: ${license2}](https://img.shields.io/badge/License-${license2}-blue.svg)]`;
  } else {
      return licenseBadge = 'None';
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    const licenseIdentifier = (licenseList.find(list => list.name === license) || {}).identifier;
      if ((licenseList.find(list => list.name === license) || {}).type === 'openSouce') {
        return licenseLink = `(https://opensource.org/licenses/${licenseIdentifier})`;
      }
      if ((licenseList.find(list => list.name === license) || {}).type === 'creativeCommons') {
        return licenseLink = `(https://creativecommons.org/${licenseIdentifier})`;
      }
  } else {
      return licenseLink = 'None';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = ({license, licenseLink}) =>
  `## License

This project is released under the [${license}]${licenseLink} license.`


// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

renderLicenseBadge(license);
renderLicenseLink(license);

module.exports = {
  licenseBadge,
  licenseLink,
  renderLicenseSection
};
