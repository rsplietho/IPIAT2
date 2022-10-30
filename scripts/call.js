class CallNotification extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "closed" });

        shadowRoot.innerHTML = `
            <article class="notification">
                <img src="" alt="">
                <article>
                    <h3>Boss</h3>
                    <p>Incoming Call</p>
                </article>
                <button>
                    <span class="material-symbols-outlined">
                    call
                    </span>
                </button>
            </article>`;
    }
}
window.customElements.define(`call-notification`, CallNotification);
// function bossCalling(){
//     notification = document.getElementById('callNotification');
//     notification.innerHTML =
// }