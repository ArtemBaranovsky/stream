<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
<!--                        Joe said ...-->
                        <p>
                            {{ status.user.name }} said ...
                        </p>
                        <p>
<!--                            A moment ago ...-->
<!--                            {{ postedOn(status) }}-->
                            {{ status.created_at | ago | capitalise }}   <!--// filter pipe syntax-->
                        </p>
                    </div>

                    <div class="message-body" v-text="status.body">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import Status from '../models/Status';
export default {
    name: "Home",
    data() {
        return {
            statuses: []
        }
    },  // postedOn(status)
    filters: {
        ago(date) {
            return moment(date).fromNow();
        },
        capitalise(value) {
            return value.toUpperCase();
        }
    },
    created() {
        // fire off an ajax request to fetch all of the statuses
        // axios.get('/statuses')
        Status.all(statuses => this.statuses = statuses);
        // .then(response => this.statuses = response.data);
        // .then(({data}) => this.statuses = data);  // ES2015 collection destructuring
    },
/*    methods: {
        postedOn(status) {
            // return moment(status.created_at).fromNow();
        }
    }*/
}
</script>
