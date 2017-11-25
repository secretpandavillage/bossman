const storage = window.localStorage;
const user = storage.getItem('username') || undefined

window.addEventListener('load', function() {
    if(user) {
        renderTemplate('user', user)
    }
    else {
        renderTemplate('login')
    }
})

function renderTemplate(template, user) {
    let output = ''
    switch(template) {
        case 'login':
            output =  `
                <section class="login">
                    <div class="icon-container">
                    <span class="animated fadeInDown" style="display:inline-block;">
                        <i class="left icono-eye"></i>
                    </span>
                    <span class="animated fadeInUp" style="display:inline-block;">
                        <i class="right icono-eye"></i>
                    </span>	
                    </div>
                    <form name="bossman" method="post" onsubmit="event.preventDefault(); login();">
                        <div>
                            <input type="text" id="username" autofocus placeholder="Username.." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username..'">
                        </div>
                        <div>
                            <input type="password" id="password" placeholder="Password.." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password..'">
                        </div>
                        <input style="display:none;" type="submit" name="submit" />
                    </form>    
                </section> `
        break;

        case 'user':
            output = ` <section class="image">
             <div class="animated bounceInDown img"></div>
            </section>
            <section class="text">
                <h2 class="animated bounceInLeft" style="color:#424242; padding-right:20px;">BOSSMAN</h2> <h2 style="color:#fa0054;" class="animated bounceInRight">INDUSTRIES</h2>		
            </section>
        
            <section class="description">
                <p class="animated fadeIn">Welcome ${user}</p>		
            </section> `
        break;
    }
    return document.getElementById('content').innerHTML = output
}

function login() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if(!!username  && !!password) {
        storage.setItem('username', username)
        renderTemplate('user', username)
    }
    else {
        return
    }
}