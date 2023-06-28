import styleUtils from './utils.module.css'
import styleButtons from './buttons.module.css'
import styleKeyframes from './keyframes.module.css'

type Styles = { [key: string]: string }
type StyleUtilKey = keyof typeof styleUtils
export type StyleButtonKey = keyof typeof styleButtons
export type StyleKeyframeKey = keyof typeof styleKeyframes

type UnionStyleKey = StyleUtilKey | StyleButtonKey | StyleKeyframeKey

export function bindClassNames<T extends Styles>(styles: T) {
  type BooleanMap = Partial<{ [key in keyof T | UnionStyleKey]: boolean }>
  const stylesWithUtils = {
    ...styles,
    ...styleUtils,
    ...styleButtons,
    ...styleKeyframes,
  }
  const fn = (
    ...classNames: (
      | keyof T
      | false
      | null
      | undefined
      | BooleanMap
      | UnionStyleKey
    )[]
  ) => {
    return (classNames.filter((cn) => cn) as (keyof T | UnionStyleKey)[])
      .map((className) => {
        if (typeof className === 'object') {
          const keys = Object.keys(className) as (keyof T)[]
          return keys
            .filter((key) => className[key])
            .map((key) => stylesWithUtils[key])
            .join(' ')
        }
        return stylesWithUtils[className] ?? className
      })
      .join(' ')
  }
  return fn
}
