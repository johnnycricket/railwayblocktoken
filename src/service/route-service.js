export default {
    routeState: {},
    db: firebase.database(),

    getRoute() {
        this.routeState = this.db.ref('routes/shr').once('value').then(
            function(snapshot){
                console.log(snapshot);
            }
        )

    }
};