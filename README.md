
# HiddenRoutesOnDrawers

Este é um projeto onde tive que fazer alterações na biblioteca do React Navigation 6 para suprir uma necessidade de ocultar rotas da gaveta de navegação.

## Aprendizados

Neste projeto, além de aprender bastante sobre a criação de navegações personalizadas utilizando a biblioteca React Navigation 6 também aprendi a utilizar o pacote patch-package para realizar alterações em pacotes NPM, algo que foi necessário para seguir um padrão de design que possuo em um dos projetos que estou atuando.

## Instalação

Clone o reposítorio em sua máquina e na pasta do projeto execute os comandos abaixo.

```bash
  yarn install
  npx patch-package
  expo start
```
    
## Documentação

[React Navigation 6](https://reactnavigation.org/blog/2021/08/14/react-navigation-6.0/)

[Patch Package](https://www.npmjs.com/package/patch-package)

[Expo](https://docs.expo.dev/)


## Funcionalidades

- Ocultar Rotas da gaveta de navegação
- Possibilidade de acessar tais rotas por botões


## Uso/Exemplos

Após configurar suas rotas no Drawer, passe para o componente CustomDrawer um array de string contendo o nome das rotas que queremos ocultar.

```javascript
export function DrawerRoutes() {
  const { Screen, Navigator } = createDrawerNavigator();

  return (
    <Navigator
      drawerContent={(props) => (
        <CustomDrawer
          {...props}
          HideRoutes={["HiddenScreenA", "HiddenScreenB"]}
        />
      )}
    >
      <Screen name="Profile" component={Profile} />
      <Screen name="Topics" component={Topics} />

      <Screen name="HiddenScreenA" component={HiddenScreenA} />
      <Screen name="HiddenScreenB" component={HiddenScreenB} />
    </Navigator>
  );
}
```

Este array será utilizado por um componente interno da biblioteca @react-navigation-drawer para não renderizar as opções para tais rotas, mantendo a possibilidade de acessá-las.

