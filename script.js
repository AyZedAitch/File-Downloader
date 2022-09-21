const textArea = document.querySelector('textarea')
const fileName = document.querySelector('.file-name input')
const fileType = document.querySelector('.save-as select')
const btn = document.querySelector('.btn')

fileType.addEventListener('change',()=>{
    let selectedOption = fileType.options[fileType.selectedIndex].text.split(' ')[0];
    btn.innerHTML = `Save as ${selectedOption} File`
})

btn.addEventListener('click',()=>{
    const blob = new Blob([textArea.value], {type: fileType.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = fileName.value;
    link.href = fileUrl;
    link.click();
})
