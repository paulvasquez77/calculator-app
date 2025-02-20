import { useEffect, useRef, useState } from "react"

enum Operator {
    add = "+",
    subtract = "-",
    multiply = "x",
    divide = "÷",
}

export const useCalculator = () => {
    const [formula, setFormula] = useState("0")
    const [number, setNumber] = useState("0")
    const [prevnumber, setPrevNumber] = useState("0")

    const lastOperation = useRef<Operator>()

    useEffect(() => {
      setFormula(number);
    }, [number])
    
    const buildNumber = (numberString: string) => {
        console.log({numberString})
        if (number.includes(".") && numberString === ".") return;

        if (number.startsWith("0") || number.startsWith("-0")) {
            
        }
        setNumber(number + numberString)
    }

    return {
        //Props
        formula,
        number,
        prevnumber,

        //Methods
        buildNumber
    }
}

