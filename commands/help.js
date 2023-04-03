function help()
{
    console.log(`
            Enter the following instructions only:
            1) tree command - node fo.js tree <directory_path>
            2) organize command - node fo.js organize <directory_path>
            3) help command - node fo.js help <directory_path>
    `);
}


module.exports = 
{
    helpKey: help
}