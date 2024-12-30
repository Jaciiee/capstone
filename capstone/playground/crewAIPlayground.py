from crewai import Agent, Task, Crew, Process, LLM
from langchain_ollama import OllamaLLM
from pydantic import BaseModel

class task(BaseModel):
    taskID: int
    task_title: str
    task_description: str
    difficulty_level: str
    estimated_days: int
    tags: list
    rewards: int

llm = LLM(
    model="ollama/openhermes",
    base_url="http://localhost:11434"
    )

taskGiver = Agent (
    role = "Task Giver",
    goal = ("Generate task for children from age 6 to 12 to do at home. The task should be things the child can do in the real world."
            "Include details such as difficulty level (easy, medium, hard), estimated days to complete, tags, and rewards (rewards depends on the task difficulty level and the rewards range from $1 to $10)."),
    backstory="I am a mother who wants to give my child tasks to do so that they can help out around the house.",
    llm = llm,
    verbose=True,
    allow_delegation=False
)

taskValidator = Agent (
    role = "Task Validator",
    goal = "Validate the tasks given by the task giver and summarize the task in a report.",
    backstory="I am a father who wants to validate the task given to my child.",
    llm = llm,
    verbose=True,
    allow_delegation=False
)

task1 = Task(
    description="Generate a task for a 6-12 year old child",
    agent=taskGiver,
    expected_output="A detailed description of a task that a 6-12 year old child can do at home."
)

task2 = Task(
    description="Validate the task given to the child, and make sure it is doable by a 6-12 year old child",
    agent=taskValidator,
    # expected_output="A validation report indicating whether the task from task1 is suitable for a 6-12 year old or not."
    expected_output="A JSON object with 'taskID', 'description' and 'difficulty_level' fields.",
    output_json=task
)

crew = Crew (
    agents=[taskGiver, taskValidator],
    tasks=[task1, task2],
    verbose=True,
    process=Process.sequential,
    
)

result = crew.kickoff()
#print(result)
tasks = result['task']
print(tasks)