export default function RightStepItem({step}) {
    return (   
        <div className="right-step-item-wrapper">
            <div className="right-step-item-step">{step.step}</div>
            <span className="right-step-item-desc">{step.description}</span>
        </div>
    )
}