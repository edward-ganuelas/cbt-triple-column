<template>
    <div class="container-fluid automatic-negative-thoughts">
      <div class="row">
        <header-text :headerText="headerText" v-if="headerText" />
        <div class="col-12 show-text" v-if="!showText">
          <div class="container-fluid">
            <div class="row no-gutters">
              <div class="col-12">
                <textarea rows="3" v-model="automaticNegativeThoughts"></textarea>
              </div>
              <div class="col-12">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-6">
                      <icon-button icon="fas fa-check" @click="submit" iconColor="green" />
                    </div>
                    <div class="col-6">
                       <icon-button icon="fas fa-eraser" @click="clear" iconColor="red" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
         <div class="col-12 show-text" v-if="showText">
          <clearable-text :text="automaticNegativeThoughts" v-on:removeText="removeThoughts" />
        </div>
      </div>
     
    </div>
</template>

<script>
import ClearableText from '@/components/ClearableText';
import HeaderText from '@/components/HeaderText';
import IconButton from '@/components/IconButton';
export default {
    name: 'AutomaticNegativeThoughts',
    components: {
        ClearableText,
        HeaderText,
        IconButton
    },
    props:{
        headerText: {
            type: String,
            required: false
        },
        savedValue: {
            type: String, 
            required: false
        }
    },
    data() {
        return {
            automaticNegativeThoughts: '',
            showText: false,
        }
    },
    methods: {
        submit() {
            if (this.automaticNegativeThoughts == '') {
                return;
            }
            this.showText = true;
            this.$emit('save', this.automaticNegativeThoughts);
        },
        removeThoughts() {
            this.showText = false;
        },
        clear() {
            this.automaticNegativeThoughts = '';
            this.$emit('save', this.automaticNegativeThoughts);
        },
        parentSave() {
            this.submit();
        }
    },
    beforeMount() {
        if (this.savedValue) {
            this.automaticNegativeThoughts = this.savedValue;
            this.showText = true;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.automatic-negative-thoughts{
  
  border-bottom: 1px solid #ebebeb;

  textarea{
    resize: none;
    width: 100%;
    height: 250px;
  }
  .show-text{
    min-height: 300px;
  }
  @media (min-width: 768px){
    border-bottom: none;
  }
}

</style>
