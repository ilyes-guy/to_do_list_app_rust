

function App() {



    return (
        <div id='header'>
            <div>
                <div dangerouslySetInnerHTML={{__html: "<svg viewBox='0 0 178 36' width='178' height='36' fill='none' role='img' class='logo with-wordmark' aria-labelledby='logo-9-title'><title id='logo-9-title'>Proton Calendar</title><path fill='url(#logo-9-a)' d='M3 6a3 3 0 0 0-3 3v1l1 1v17l20-10 1 1h6V9a3 3 0 0 0-3-3H3Z'></path><path fill='url(#logo-9-b)' d='M19.643 10H0v16.119A2.88 2.88 0 0 0 2.881 29H13l5.251-7.877A3.411 3.411 0 0 1 21.41 19H22v-6.643A2.357 2.357 0 0 0 19.643 10Z'></path><path fill='#B8D7FF' d='M13 29v-1.075a2.5 2.5 0 0 1 .602-1.627l5.053-5.897a3.42 3.42 0 0 1 .345-.403l-.345.403A3.394 3.394 0 0 0 18 22.41V29h-5Z'></path><path fill='#8F69FF' d='M20.6 25.386h1.02a.787.787 0 0 0 .802.596c.462-.001.766-.253.766-.623s-.316-.575-.943-.575h-.405v-.833h.352c.606 0 .854-.223.854-.555 0-.331-.269-.56-.642-.56a.642.642 0 0 0-.455.153.631.631 0 0 0-.219.425h-.985c.035-.58.497-1.414 1.654-1.414.928 0 1.57.525 1.57 1.264a1.1 1.1 0 0 1-.216.66c-.142.191-.34.335-.567.405v.015a1.117 1.117 0 0 1 .922 1.135c0 .801-.74 1.33-1.695 1.33-1.014.005-1.74-.567-1.813-1.424Zm5.292-3.306h.743v4.661h-.959v-3.576l-.923.622v-.942l1.14-.765Z'></path><path fill='var(--logo-text-proton-color)' d='M38 21.26v3.664h2.56V21.42a1.282 1.282 0 0 1 1.279-1.286h2.624a4.593 4.593 0 0 0 3.261-1.36 4.652 4.652 0 0 0 1.351-3.28c0-1.23-.486-2.41-1.35-3.282a4.603 4.603 0 0 0-3.265-1.358H38v4.58h2.56v-2.159h3.73c.58 0 1.134.232 1.544.644a2.2 2.2 0 0 1 0 3.105 2.18 2.18 0 0 1-1.544.643h-2.71a3.55 3.55 0 0 0-2.528 1.055 3.651 3.651 0 0 0-.776 1.166A3.54 3.54 0 0 0 38 21.26Zm11.473 3.664v-5.583c0-2.279 1.322-4.091 3.97-4.091a5.09 5.09 0 0 1 1.262.14v2.296c-.301-.02-.56-.02-.682-.02-1.402 0-2.005.646-2.005 1.955v5.303h-2.545Zm5.994-4.734c0-2.802 2.104-4.937 5.033-4.937 2.929 0 5.033 2.135 5.033 4.937 0 2.802-2.104 4.957-5.033 4.957-2.929 0-5.033-2.158-5.033-4.957Zm7.558 0c0-1.593-1.064-2.722-2.525-2.722-1.465 0-2.525 1.127-2.525 2.722 0 1.612 1.063 2.721 2.525 2.721 1.461 0 2.525-1.112 2.525-2.721Zm10.643 0c0-2.802 2.104-4.937 5.032-4.937 2.926 0 5.03 2.135 5.03 4.937 0 2.802-2.104 4.957-5.03 4.957-2.928 0-5.032-2.158-5.032-4.957Zm7.557 0c0-1.593-1.063-2.722-2.524-2.722-1.462 0-2.525 1.127-2.525 2.722 0 1.612 1.063 2.721 2.525 2.721 1.461 0 2.524-1.112 2.524-2.721Zm3.828 4.734v-5.38c0-2.499 1.583-4.294 4.41-4.294 2.806 0 4.39 1.793 4.39 4.294v5.38h-2.525v-5.18c0-1.39-.623-2.258-1.865-2.258-1.243 0-1.865.866-1.865 2.258v5.18h-2.545Zm-12.147-7.436h-2.747v3.528c0 1.23.44 1.793 1.703 1.793.12 0 .42 0 .802-.02v2.075c-.52.14-.981.223-1.484.223-2.124 0-3.569-1.29-3.569-3.728v-3.87h-1.706v-2.036h.424c.168 0 .335-.034.489-.097a1.284 1.284 0 0 0 .694-.698 1.28 1.28 0 0 0 .096-.492v-1.918h2.545v3.205H72.9v2.035h.006Z'></path><path fill='var(--logo-text-product-color)' d='M102.372 24.208a6.762 6.762 0 0 1-2.562-2.567 7.615 7.615 0 0 1 0-7.285 6.762 6.762 0 0 1 2.562-2.567 7.225 7.225 0 0 1 3.654-.935 7.446 7.446 0 0 1 3.03.614c.874.375 1.646.95 2.255 1.676a5.903 5.903 0 0 1 1.227 2.499h-2.695a3.808 3.808 0 0 0-1.433-1.664 4.657 4.657 0 0 0-4.642-.02 4.381 4.381 0 0 0-1.611 1.672 5.07 5.07 0 0 0 0 4.752c.376.692.936 1.27 1.62 1.67.684.4 1.462.603 2.255.594a4.273 4.273 0 0 0 2.378-.626 3.83 3.83 0 0 0 1.433-1.667h2.695a5.932 5.932 0 0 1-1.233 2.516 5.989 5.989 0 0 1-2.249 1.679 7.404 7.404 0 0 1-3.03.597 7.171 7.171 0 0 1-3.654-.938Zm18.438-8.428a4.4 4.4 0 0 1 1.804 1.744c.448.806.672 1.718.652 2.642v4.752h-2.289l-.164-1.427a3.195 3.195 0 0 1-1.264 1.22 3.857 3.857 0 0 1-1.835.427 4.438 4.438 0 0 1-2.318-.626 4.48 4.48 0 0 1-1.661-1.767 5.387 5.387 0 0 1-.611-2.602 4.953 4.953 0 0 1 .663-2.539 4.734 4.734 0 0 1 1.824-1.787 5.217 5.217 0 0 1 2.6-.634 5.437 5.437 0 0 1 2.599.597Zm-.839 6.396c.497-.475.744-1.15.744-2.03a2.758 2.758 0 0 0-.715-1.979 2.346 2.346 0 0 0-1.792-.76 2.35 2.35 0 0 0-.988.192 2.376 2.376 0 0 0-.822.58 3.079 3.079 0 0 0-.721 1.976c0 .72.256 1.42.721 1.975a2.385 2.385 0 0 0 1.813.752 2.4 2.4 0 0 0 .95-.177 2.53 2.53 0 0 0 .81-.53Zm7.561 2.742h-2.58V11.066h2.58v13.852Zm11.038-3.9h-7.244a2.57 2.57 0 0 0 .879 1.475 2.498 2.498 0 0 0 1.591.52c.46.018.92-.063 1.348-.234.339-.154.617-.415.795-.74h2.39a3.93 3.93 0 0 1-1.672 2.304 5.04 5.04 0 0 1-2.795.8c-.907.02-1.806-.2-2.599-.637a4.45 4.45 0 0 1-1.755-1.776 5.268 5.268 0 0 1-.621-2.567 5.21 5.21 0 0 1 .63-2.567 4.552 4.552 0 0 1 1.755-1.776 4.981 4.981 0 0 1 2.53-.635 4.795 4.795 0 0 1 2.47.65 4.59 4.59 0 0 1 1.718 1.786c.419.78.635 1.653.623 2.54a9.17 9.17 0 0 1-.043.857Zm-6.385-3.188c-.439.357-.75.852-.879 1.404h4.869a2.152 2.152 0 0 0-.787-1.384 2.42 2.42 0 0 0-1.603-.546 2.478 2.478 0 0 0-1.6.526Zm7.365 1.664a4.297 4.297 0 0 1 .273-1.69c.204-.54.517-1.032.919-1.446.796-.787 1.893-1.178 3.292-1.178 1.398 0 2.493.4 3.286 1.198a4.287 4.287 0 0 1 1.183 3.139v5.418h-2.579v-5.238a2.599 2.599 0 0 0-.46-1.664 1.97 1.97 0 0 0-2.835 0 2.618 2.618 0 0 0-.483 1.673v5.22h-2.579l-.017-5.432Zm17.375-8.428h2.579v13.852h-2.346l-.181-1.47a3.09 3.09 0 0 1-1.235 1.24 3.92 3.92 0 0 1-1.908.447 4.23 4.23 0 0 1-2.134-.569 4.254 4.254 0 0 1-1.631-1.71 5.508 5.508 0 0 1-.624-2.699 5.475 5.475 0 0 1 .624-2.69 4.254 4.254 0 0 1 1.631-1.71 4.239 4.239 0 0 1 2.134-.569 4.01 4.01 0 0 1 1.856.41c.517.248.948.648 1.235 1.146v-5.678Zm-.715 11.101a2.726 2.726 0 0 0 .712-2.021c0-.866-.241-1.533-.721-1.996a2.406 2.406 0 0 0-.807-.529 2.455 2.455 0 0 0-.951-.18 2.46 2.46 0 0 0-.948.198 2.462 2.462 0 0 0-.798.543 2.723 2.723 0 0 0-.713 1.978c-.037.732.219 1.45.713 1.996a2.394 2.394 0 0 0 1.795.74 2.348 2.348 0 0 0 1.718-.729Zm12.222-6.387a4.41 4.41 0 0 1 1.804 1.744c.448.806.672 1.718.652 2.642v4.752h-2.293l-.163-1.427a3.243 3.243 0 0 1-1.267 1.22 3.857 3.857 0 0 1-1.835.427 4.423 4.423 0 0 1-3.979-2.393 5.4 5.4 0 0 1-.612-2.602 4.964 4.964 0 0 1 .664-2.539 4.76 4.76 0 0 1 1.821-1.784 5.242 5.242 0 0 1 2.605-.637 5.445 5.445 0 0 1 2.603.597Zm-.836 6.396c.497-.475.744-1.15.744-2.03a2.777 2.777 0 0 0-.712-1.979 2.508 2.508 0 0 0-2.781-.566c-.31.132-.589.323-.821.566a3.072 3.072 0 0 0 0 3.952 2.365 2.365 0 0 0 1.803.76 2.474 2.474 0 0 0 1.767-.703Zm4.579-2.886a4.23 4.23 0 0 1 1.051-2.97c.698-.76 1.695-1.14 2.987-1.14.434-.004.865.045 1.287.142v2.316c-.204 0-.437-.02-.692-.02-.707 0-1.224.163-1.551.489a2.065 2.065 0 0 0-.397.692 2.052 2.052 0 0 0-.095.789v5.34h-2.579l-.011-5.637Z'></path><defs><radialGradient id='logo-9-b' cx='0' cy='0' r='1' gradientTransform='matrix(44.9183 0 0 40.1408 21.159 -5.851)' gradientUnits='userSpaceOnUse'><stop offset='.503' stop-color='#6D4AFF'></stop><stop offset='.994' stop-color='#06B8FF'></stop></radialGradient><linearGradient id='logo-9-a' x1='23.523' x2='7.191' y1='21.036' y2='-2.692' gradientUnits='userSpaceOnUse'><stop stop-color='#BFE8FF'></stop><stop offset='.307' stop-color='#BFABFF'></stop><stop offset='1' stop-color='#7341FF'></stop></linearGradient></defs></svg>"}} />
            </div>
            <div id='header_right_div'>
                <button className="button primary_button" >placeholder</button>
                <button className="button secondary_button">settings</button>
               
            </div>
        </div>
    )
}

export default App
