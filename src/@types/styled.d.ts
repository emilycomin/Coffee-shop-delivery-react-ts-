// arquivo de definição de TS

import 'styled-components'
import { DefaultTheme } from '../styles/themes/default'

// guardando as propriedades que existe dentro do meu theme padrão(defaultTheme) dentro da 
// variavel ThemeType para poder acessa as propridas do tema nos componentes 
// quando formos escrever o código
type ThemeType = typeof DefaultTheme;

// agregando as definições de tipos no styled-ComponentStyle, então quando o SC for importado em 
// algum arquivo, será importado o padrão e mais o que eu definir aqui
declare module 'styled-components'{
export interface DefaultTheme extends ThemeType{}
}