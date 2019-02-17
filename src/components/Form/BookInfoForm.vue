<template>
<div>
    <div class="md-layout">
        <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
                <label>Title</label>
                <md-input v-model="regular" md-counter="30" value="abcdfg"></md-input>
            </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
                <label>Publisher</label>
                <md-input v-model="maxLength" maxlength="30"></md-input>
            </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field :md-counter="false">
                <label>Owner</label>
                <md-input v-model="disabled" maxlength="10"></md-input>
            </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
            <!-- <md-datepicker v-model="selectedDate" md-immediately /> -->
            <md-datepicker md-immediately>
                <label>Select date</label>
            </md-datepicker>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
            <md-chips md-placeholder="Add keywords..."></md-chips>
        </div>
        <md-field>
            <label>Only images</label>
            <md-file accept="image/*" />
            <!-- <md-file v-model="single" accept="image/*" /> -->
        </md-field>
        <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
                <label>요약</label>
                <md-textarea v-model="textarea" md-counter="80"></md-textarea>
            </md-field>
        </div>
    </div>
</div>
</template>

<script>
export default {
data: () => ({
      regular: null,
      maxLength: null,
      disabled: null,
      autogrow: null,
      textarea: null
    })
}
</script>

<style>

</style>
