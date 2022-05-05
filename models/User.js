class User{

    constructor(name, gender,birth, country, email, password, photo, admin){
        // underline = 'privada'
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();
    }

    // getters and setters

    get register(){
        return this._register;
    }
    // name
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }

    // gender
    get gender(){
        return this._gender;
    }
    set gender(value){
        this._gender = value;
    }
    // email
    get email(){
        return this._email;
    }
    set email(value){
        this._email = value;
    }

    // birth
    get birth(){
        return this._birth
    }
    set birth(value){
        this._birth = value;
    }

    // country
    get country(){
        return this._country;
    }
    set country(value){
        this._country = value;
    }

    // photo
    get photo(){
        return this._photo;
    }
    set photo(value){
        this._photo = value;
    }
    // admin
    get admin(){
        return this._admin;
    }
    set admin(value){
        this._admin  =value;
    }

    // password
    get password(){
        return this._password;
    }
    set password(value){
        this._password = value;
    }
}