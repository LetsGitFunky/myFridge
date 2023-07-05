export default function LeftStepItem({step}) {
    return (   
        <div className="left-step-item-wrapper">
            <div className="left-step-item-step">{step.step}</div>
            <span className="left-step-item-desc">{step.description}</span>
        </div>
    )
}