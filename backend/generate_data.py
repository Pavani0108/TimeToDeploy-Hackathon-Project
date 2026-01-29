import pandas as pd
import random
from datetime import datetime, timedelta

# ✅ Visa delay mapping
VISA_COUNTRY_DELAYS = {
    "USA": 25,
    "UK": 20,
    "Singapore": 10
}


def generate_deployment_dataset(rows=1000):

    records = []
    start_date = datetime(2024, 1, 1)

    for i in range(rows):

        # Candidate readiness factors
        skill_gap = random.randint(0, 20)
        onboarding = random.randint(2, 10)

        # ✅ Visa requirement
        visa_status = random.choice(["Required", "Not Required"])

        if visa_status == "Required":
            visa_country = random.choice(["USA", "UK", "Singapore"])
            visa_delay = VISA_COUNTRY_DELAYS[visa_country]
        else:
            visa_country = "None"
            visa_delay = 0   # ✅ No visa delay at all

        # Go-live urgency
        golive_status = random.choice([
        "Pipeline",
        "Planning Phase",
        "Go-Live Confirmed",
        "Go-Live Critical (<30 days)",
        "Project Delayed"
    ])


        # Deployment time calculation
        deployment_days = 10
        deployment_days += skill_gap * 1.5
        deployment_days += onboarding * 1.2
        deployment_days += visa_delay

        if golive_status == "Go-Live Critical (<30 days)":
            deployment_days -= random.randint(4, 7)

        elif golive_status == "Go-Live Confirmed":
            deployment_days -= random.randint(2, 4)

        elif golive_status == "Planning Phase":
            deployment_days -= random.randint(0, 2)

        elif golive_status == "Project Delayed":
            deployment_days += random.randint(3, 6)


        deployment_days = max(5, round(deployment_days))

        date = start_date + timedelta(days=i)

        records.append({
            "skill_alignment_days": skill_gap,
            "onboarding_tat": onboarding,

            # ✅ Visa fields
            "visa_status": visa_status,
            "visa_country": visa_country,

            "project_golive_status": golive_status,
            "deployment_days": deployment_days,
            "date": date.strftime("%Y-%m-%d")
        })

    df = pd.DataFrame(records)
    df.to_csv("data/deployment_data.csv", index=False)

    print(f"✅ Dataset generated successfully with {rows} records!")


if __name__ == "__main__":
    generate_deployment_dataset(1000)
