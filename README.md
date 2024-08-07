# FireChat + React + TypeScript

## Recursos

- [theme inspiration](https://connectme-html.themeyn.com/index.html)
- [firebase documentation](https://firebase.google.com/docs?hl=es-419)
- [React Fire npm](https://github.com/FirebaseExtended/reactfire)
- [github codelab react](https://github.com/firebase/friendlyeats-web/blob/master/reactfire-end/hosting/src/app.tsx)
- [codelap react firebase](https://firebase.google.com/codelabs/firestore-web?hl=es-419#2)
- [react icons](https://react-icons.github.io/react-icons/)
- [emoji-picker-react](https://www.npmjs.com/package/emoji-picker-react)
- [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [timeago.js](https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3)
- [firebase rules extension](https://marketplace.visualstudio.com/items?itemName=toba.vsfire)

### Input File

- [input file](https://github.com/shadcn-ui/ui/discussions/2137)

### Users

- [random user api](https://randomuser.me/api/)
- [random 15 Mexican users](https://randomuser.me/api/?results=15&nat=mx)

### Custom Scroll Bar

- [tailwind-scrollbar](https://adoxography.github.io/tailwind-scrollbar/examples/)

```css
.custom-scrollbar {
  overflow-y: auto;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

.custom-scrollbar:hover::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 10px;
}

.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: rgba(107, 114, 128, 0.7);
  border-radius: 10px;
}

/* For Firefox */
.custom-scrollbar {
  scrollbar-width: none; /* Hide scrollbar by default */
}

.custom-scrollbar:hover {
  scrollbar-width: thin; /* Show thin scrollbar on hover */
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}
```

### IA copilot

- [supermaven.com](https://supermaven.com/)

## Tips

### non-null assertion operator

En TypeScript, el operador ! se llama "non-null assertion operator". Se utiliza para indicar al compilador que una expresión no es null ni undefined, incluso si el tipo de la expresión podría serlo. Esto es útil cuando el programador está seguro de que el valor no será null o undefined en tiempo de ejecución, pero el compilador no puede inferirlo.

ejemplo:

```ts
if (auth.currentUser!.email === values.email) {
  form.setError("email", {
    type: "manual",
    message: "You can't search yourself",
  });
  return;
}
```
