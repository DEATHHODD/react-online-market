import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Мониторы'},
            {id: 4, name: 'Телевизоры'},
            {id: 5, name: 'Ноутбуки'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'LG'},
        ]
        this._devices = [
            {id: 1, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`},
            {id: 2, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`},
            {id: 3, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`},
            {id: 4, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`},
            {id: 5, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`},
            {id: 6, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`},
            {id: 7, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`},
            {id: 8, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`},
            {id: 9, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`},
            {id: 10, name: 'iphone 12 pro', price: 250000, rating: 5, img: `https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/1024/Preview-icon.png`},
        ]
        this._selectedType = {}
        this._selectedBrand ={}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType 
    }
    get selectedBrand() {
        return this._selectedBrand
    }

}