<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <app-server
                        class="list-group-item"
                        v-for="server in servers"
                        :key="server.id"
                        :server="server"
                >
                </app-server>
            </ul>
        </div>
        <server-details></server-details>
    </div>
</template>

<script>
    import ServerDetails from "./ServerDetails";
    import Server from "./Server";
    export default {
        components: {
            'server-details': ServerDetails,
            'app-server': Server
        },
        data: () => {
            return{
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                ]
            }
        }
    }
</script>

<style scoped>
    /*div{
        border: 1px solid blue;
    }*/
</style>