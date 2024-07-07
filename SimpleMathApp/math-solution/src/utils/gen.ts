const generateMulti = () => {
    const num1 = Math.floor(Math.random() * 8) + 2
    const num2 = Math.floor(Math.random() * 8) + 2
    return {
        question: `${num1} x ${num2}`,
        correctAnswer: num1 * num2
    }
}

export default generateMulti
