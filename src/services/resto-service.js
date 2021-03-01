export default class RestoService {
    constructor(){
        this._api = 'http://localhost:3000';
    }

    getResource = async (link) => {
        const res = await fetch(`${this._api}${link}`);

        if(!res.ok){
            throw new Error(`Coudn't fetch ${link}, status: ${res.status}`)
        }
        
        return await res.json();
    }

    getMenu = async () => {
        return await this.getResource('/menu');
    }

    getImages = async () => {
        return await this.getResource('/images');
    }

    getTimeRem = async () => {
        return await this.getResource('/timer');
    }

    getItem = async (id) => {
        const res = await this.getResource('/menu/');
        const item = res.find((el) => {
            return el.id === +id
        })
        return item
    }

    setOrder = async (quantity) => {
        const num = await this.getOrderNum();
        const newItem = {
            quantity: quantity,
            id: num
        }
        console.log(newItem);

        const res = await fetch(`${this._api}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json;charset-utf-8'
            },
            body: JSON.stringify(newItem)
        });
        if(!res.ok){
            throw new Error('json err!!!')
        }
    }

    getOrderNum = async () => {
        const res = await this.getResource('/orders/');
        const orderNum = res.length + 1;
        return orderNum;
    }
}