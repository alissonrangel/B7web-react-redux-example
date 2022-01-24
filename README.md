## Projeto exemplo de uso do Redux com React do curso da B7web

```
npx create-react-app reduxexample --template typescript
npm i redux react-redux @reduxjs/toolkit
npm i -D @types/react-redux
```

#### Teoria
 
- store : recomanda-se ter uma store por aplicação - local onde vai armazenar as infos
- provider : disponibiliza o store em todos que estão dentro da aplicação
- reducers / slice
- actions / dispatches
- selectors : para pegar as infos que estão na store
- usar um useSelector para cada um dos reducers