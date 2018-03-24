# Application About

Project owner : Laurene Filatriau

Developed by : Quentin Danneville

Description Project : TODO

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them :

```
npm install
```

### Installing

A step by step series of examples that tell you have to get a development env running :

Use gulp to build the dist/ folder :

```
gulp
```

If you want to have livereload and live changes

```
gulp watch
```

Then you have to serve the back-end part. This can be done using nginx for dev purposes.

**The project URL must be TO DEFINE**

## Deployment

### Partie App

1. Build a venv at the project's root folder : `python3 -m venv venv`

2. Load the venv : `source venv/bin/activate`

3. Install dependencies : `pip3 install -r app/requirements.txt`

4. Start the server : `python3 app/manage.py runserver 8008` (choose the proper port)

5. Service available : `http://localhost:8008`

## Built With

* [AngularJS](https://code.angularjs.org/snapshot/docs/api) - The web framework used (v1.6.9)

## Authors

* Quentin Danneville

## License

## Acknowledgments
