import { useEffect, useState, type ReactNode } from "react"


interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string
  appearance?: 'normal' | 'label-placeholder' | undefined,
  animar?: boolean | undefined,
  withValue?: boolean | undefined 
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  appearance?: 'normal' | 'label-placeholder' | undefined
  id: any
}


interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  labelProps: LabelProps,
  InputProps: InputProps,
  appearance?: 'normal' | 'label-placeholder' | undefined
}

export default function InputGroup({ appearance = "normal", InputProps, labelProps, ...props}: InputGroupProps, )  {

  const [animar, setAnimar] = useState(false);
  const [withValue, setWithValue] = useState(false);
  useEffect(() => {
    if (InputProps.value !== '') {
      setWithValue(true);
    } else {
      setWithValue(false);
    }

  }, [InputProps.value,]);

  const classappearance = {
    "normal": " mt-3 pt-3",
    "label-placeholder": " py-3 ",
  }

  const classes =  ` w-full mb-[10px] py-2 relative
     ${ classappearance[appearance]}
    ${ props.className?props.className :""}
  `

  return (
    <div {...props} className={classes}>
      <Input {...InputProps} appearance={appearance} />
      <Label htmlFor={ InputProps.id } {...labelProps} appearance={appearance}  ></Label>
      { props.children}
    </div>
  )
}

function Input({ appearance = "normal", id , ...props}: InputProps)  {

  const classappearance = {
    "normal": " w-full p-[8px] border-solid border border-black rounded-sm ",
    "label-placeholder": " w-full p-[8px] border-solid border border-black rounded-sm "
  }

  const classes = `peer placeholder-transparent invalid:border-red-500
    ${ classappearance[appearance]}
    ${ props.className?props.className :""}
  `

  return (
    <>
      <input {...props} id={id}
        className={classes} />
    </>
  )
}

function Label({ appearance = "normal", ...props}: LabelProps)  {

  const classappearance = {
    "normal": " absolute w-full -top-3 left-0",
    "label-placeholder": `absolute bg-white left-1 top-0 text-[1rem] leading-[1.1rem] text-gray-600 text-sm peer-placeholder-shown:text-base 
    peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 transition-all peer-focus:top-0 peer-focus:text-gray-600 peer-focus:text-sm `
  }

  

  const classes = `peer-required:after:ml-0.5 peer-required:after:text-red-500 peer-required:after:content-['*']  
    
    ${ classappearance[appearance]}
    ${ props.className?props.className :""}
  `

  return (
    <>
      <label {...props} className={ classes } > {props.text} </label>
    </>
  )
}