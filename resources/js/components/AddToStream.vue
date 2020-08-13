<template>
    <div class="message">
        <div class="message-header">
            Push to the Stream...
        </div>
        <div class="message-body">
            <form action="" @submit.prevent="onSubmit" @keydown="form.errors.clear()">
                <p class="control">
                    <textarea class="textarea" name="" id="" cols="30" rows="10" placeholder="I have something to say..." v-model="form.body"></textarea>
                    <span class="help is-danger"
                          v-if="form.errors.has('body')"
                          v-text="form.errors.get('body')"
                          > error
                    </span>
                </p>

                <p class="control">
                    <button class="button is-primary" :disabled="form.errors.any()">Submit</button>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddToStream",
        data() {
          return {
              form: new Form({ body: '' })
          }
        },
        methods: {
            onSubmit() {
                // submit an ajax request to the server
                // this.form.post('/statuses').then(status => alert('All done!'));
                this.form
                    .post('/statuses')
                    .then(status => this.$emit('completed', statuses));
            }
        }
    }
</script>

<style scoped>

</style>
