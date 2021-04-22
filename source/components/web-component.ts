/**
 * class WebComponent
 */
class WebComponent extends HTMLElement
{
    id: string;

    constructor()
    {
        super();
        this.attachShadow({ mode: 'open' });
        // this.id = this.getAttribute('id');
    }

    static get observedAttributes(): string[]
    {
        return [];
    }

    get template(): HTMLTemplateElement
    {
        const node = document.createElement('template');
        node.innerHTML = `<h1><slot></slot></h1>`;
        return node;
    }

    render()
    {
        this.shadowRoot.innerHTML = '';
        const node = this.template.content.cloneNode(true);
        this.shadowRoot.appendChild(node);
    }

    updateDataset()
    {
        // this.dataset.type = 'component';
    }

    updateStyle()
    {
        // this.style.display = 'block';
    }

    connectedCallback()
    {
        this.render();
    }

    disconnectedCallback()
    {
        //
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        // if (oldValue !== newValue)
        this.render();
    }

    adoptedCallback()
    {
        //
    }
}

export default WebComponent;