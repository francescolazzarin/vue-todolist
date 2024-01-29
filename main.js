// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


  const { createApp } = Vue

  createApp({
    data() {
      return {
        nuovoTodo:" ",
        todoList: [
            { text: 'Fare la spesa', done: false },
            { text: 'Studiare per l\'esame', done: true },
            { text: 'Andare in palestra', done: false },
            { text: 'Chiamare il dentista', done: false },
            { text: 'Scrivere relazione di lavoro', done: true },
            { text: 'Pulire la casa', done: false },
            { text: 'Preparare la cena', done: true },
            { text: 'Leggere un libro', done: false },
            { text: 'Risolvere puzzle', done: false },
            { text: 'Organizzare la scrivania', done: true }
          ]  
      }
    },
    methods:{
      rimuovitoDo(indiceCorrente){
        this.todoList.splice(indiceCorrente, 1)
      },
      aggiungitodo(){
        this.todoList.push({text:this.nuovoTodo, done:false})
        this.nuovoTodo = " "
      },
      invertiDone(index){
        this.todoList[index].done = !this.todoList[index].done
      }
    }
  }).mount('#app')
