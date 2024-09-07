const data = {
    "chapter": "Chapter 1: The Mom Test",
    "sections": [
        {
            "title": "Introduction to The Mom Test",
            "content": "The Mom Test introduces a critical lesson for entrepreneurs: talking to customers is essential, but doing it wrong can be worse than not doing it at all. Many startups fail because they build products based on flawed customer feedback. The key is to ask the right questions that elicit honest, useful responses. Traditional approaches often lead to biased feedback, with people (even our moms) telling us what they think we want to hear rather than the truth. This false positive feedback can lead entrepreneurs to invest time and resources into ideas that aren't truly viable. The Mom Test provides a framework for having productive customer conversations that reveal genuine insights about their needs and problems."
        },
        {
            "title": "The Problem with Traditional Customer Feedback",
            "content": "A crucial lesson from this section is the danger of seeking validation rather than information. When entrepreneurs ask directly about their ideas, they often receive overly optimistic responses. People naturally want to be supportive and avoid hurting feelings, especially when it's clear you're excited about your idea. This leads to a false sense of validation, which can be incredibly harmful to a startup. Instead of getting accurate insights into customer needs, you end up with a collection of well-intentioned but ultimately misleading compliments. The real value lies not in people's opinions about your idea, but in concrete facts about their lives, problems, and current behaviors. Learning to distinguish between these two types of information is vital for making informed business decisions."
        },
        {
            "title": "The Three Rules of The Mom Test",
            "content": "The three rules of The Mom Test offer a powerful lesson in effective customer conversations. By talking about their life instead of your idea, you avoid biasing the conversation and get authentic insights into their world. Asking about specifics in the past, rather than generics or future intentions, provides reliable data about actual behaviors instead of optimistic predictions. Talking less and listening more ensures you're gathering information rather than pitching. These rules shift the focus from seeking validation for your idea to truly understanding your potential customers. This approach helps you uncover real problems and needs, which is far more valuable than collecting opinions about a hypothetical solution. By following these rules, you can extract meaningful insights even from potentially biased sources, including your own mother."
        },
        {
            "title": "Applying The Mom Test: Examples",
            "content": "The practical examples in this section teach a vital lesson: the stark difference between good and bad customer conversations. Bad conversations are characterized by leading questions, pitching your idea, and accepting vague assurances or compliments. Good conversations, on the other hand, focus on the customer's experiences, past behaviors, and specific problems. For instance, instead of asking 'Would you buy a product that does X?', a good question might be 'How are you currently dealing with problem Y?' These examples demonstrate how to steer conversations towards concrete, actionable information. They also show how to recover when you accidentally slip into bad conversation patterns. Learning to recognize and correct these patterns in real-time is a crucial skill for gathering reliable customer insights."
        },
        {
            "title": "The Importance of Learning vs. Validating",
            "content": "This section imparts a fundamental lesson: the goal of customer conversations is to learn, not to validate your existing ideas. Many entrepreneurs fall into the trap of seeking confirmation for their assumptions rather than being open to new information. This mindset can lead to cherry-picking positive feedback and ignoring valuable critiques or insights that don't align with preconceived notions. True learning requires a willingness to have your ideas challenged or even disproven. It's about approaching conversations with genuine curiosity about customers' lives, problems, and needs, rather than trying to convince them of your solution's value. This learning-focused approach not only yields more accurate insights but also opens up possibilities you might never have considered. Remember, the ultimate aim is to solve real problems for customers, not to prove that your initial idea was right."
        }
    ]
};

function createCustomView() {
    alert(JSON.stringify(data));
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.backgroundColor = 'lightgray';

    container.classList.add('container');

    const title = document.createElement('h1');
    title.style.color = 'black';
    title.style.textAlign = 'center';
    title.textContent = data.chapter;
    container.appendChild(title);

    const content = document.createElement('p');
    content.style.color = 'black';
    content.style.textAlign = 'center';
    content.textContent = data.sections[0].content;
    container.appendChild(content);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        const currentContent = content.textContent;
        const currentIndex = data.sections.findIndex(section => section.content === currentContent);
        const nextIndex = (currentIndex + 1) % data.sections.length;
        content.textContent = data.sections[nextIndex].content;
    });
    container.appendChild(nextButton);

    document.body.appendChild(container);
}

createCustomView();
