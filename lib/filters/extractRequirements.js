const {parseFragment} = require('parse5');


function liToRequirement(li) {
    const a = li.childNodes[0];
    return {
        title: a.childNodes[0].value,
        id: a.attrs.find(a => a.name==='href').value
    }
}

module.exports = function extractRequirements(templateContents) {
    const tree = parseFragment(templateContents ?? '')
    const blocks = tree.childNodes.filter(node => node.nodeName !== '#text')
    const h2Index = blocks.findIndex(node => node.nodeName === 'h2' && node.childNodes[0]?.value?.match(/^requirement/i))
    const ul = blocks.slice(h2Index).find(node => node.nodeName === 'ul');

    return ul.childNodes.filter(node => node.nodeName==='li').map(liToRequirement)
}

