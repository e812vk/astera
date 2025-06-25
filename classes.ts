export interface IEntity {
    id: number;
}

export class Category implements IEntity {
    public id: number;
    public name: string;
    public image: string;
    public file: File | null;

    constructor(id: number, name: string, image: string, file: File | null) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.file = file;
    }
}

export class Section implements IEntity {
    public id: number;
    public name: string;
    public desc: string;
    public info: string;
    public image: string;
    public file: File | null;
    public categoryId: number;

    constructor(id: number, name: string, desc: string, info: string, image: string, file: File | null, categoryId: number) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.info = info;
        this.image = image;
        this.file = file;
        this.categoryId = categoryId;
    }
}

export class Subsection implements IEntity {
    public id: number;
    public name: string;
    public sectionId: number;

    constructor(id: number, name: string, sectionId: number) {
        this.id = id;
        this.name = name;
        this.sectionId = sectionId;
    }
}

export class Service implements IEntity {
    public id: number;
    public name: string;
    public price: number;
    public subsectionId: number;

    constructor(id: number, name: string, price: number, subsectionId: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.subsectionId = subsectionId;
    }
}

export class Promo implements IEntity {
    public id: number;
    public title: string;
    public desc: string;
    public image: string;
    public url: string;
    public file: File | null;

    constructor(id: number, title: string, desc: string, image: string, url:string, file: File | null) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.url = url;
        this.file = file;
    }
}

export class Employee implements IEntity {
    public id: number;
    public name: string;
    public surname: string;
    public position: string;
    public info: string;
    public image: string;
    public file: File | null;

    constructor(id: number, name: string, surname:string, position: string, info: string, image: string, file: File | null) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.info = info;
        this.image = image;
        this.file = file;
    }
}

export enum Type {
    CATEGORY,
    SECTION,
    SUBSECTION,
    SERVICE,
    PROMO,
    EMPLOYEE
}

