
export class Project {
    public name: string;
    public milestone: string;
    public description: string;;
    public contacts: string[];
    public type: string;
    public targetWw: number;
    public releaseType: string;
    public sdleLink: string;
    public protexProjectName: string;


    constructor(name: string, milestone: string, description: string, contacts: string[], type:string = "", targetWw: number = 0, releaseType:string ="", sdleLink: string ="", protexProjectName: string=""){
        this.name = name;
        this.milestone = milestone;
        this.description = description;
        this.contacts = contacts;
        this.type = type;
        this.targetWw = targetWw;
        this.releaseType = releaseType;
        this.sdleLink = sdleLink;
        this.protexProjectName = protexProjectName;
    }

}