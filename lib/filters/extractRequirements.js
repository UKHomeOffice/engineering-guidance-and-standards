function liToRequirement(li) {
    const a = li.childNodes[0];
    return {
        title: a.childNodes[0].value,
        id: a.attrs.find(a => a.name==='href').value
    }
}

module.exports = async function extractRequirements(templateContents) {
    const parse5 = await import('parse5');
    const tree = parse5.parseFragment(templateContents ?? '')
    const blocks = tree.childNodes.filter(node => node.nodeName !== '#text')
    const h2Index = blocks.findIndex(node => node.nodeName === 'h2' && node.childNodes[0]?.value?.match(/^requirement/i))
    const ul = blocks.slice(h2Index).find(node => node.nodeName === 'ul');

    return ul?.childNodes.filter(node => node.nodeName==='li').map(liToRequirement) || []
}