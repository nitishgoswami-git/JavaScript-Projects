
    const insert = document.querySelector('.insert')
    window.addEventListener('keydown',(e)=>{
        insert.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>key</th>
                <th>Keycode</th>
                <th>code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${e.key === ' '? 'space' : e.key}</td>
                <td>${e.keycode}</td>
                <td>${e.code}</td>
            </tr>
        </tbody>
    </table>`
    })    
