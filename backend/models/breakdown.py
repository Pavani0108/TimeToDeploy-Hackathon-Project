# ✅ Visa delays by country
VISA_COUNTRY_DELAYS = {
    "USA": 25,
    "UK": 20,
    "Singapore": 10
}


def deployment_breakdown(skill_gap_days, onboarding_days, visa_status, visa_country):

    breakdown = {}

    breakdown["Skill Alignment Delay"] = int(skill_gap_days)
    breakdown["Onboarding Delay"] = int(onboarding_days)

    # ✅ Visa delay strictly applies only if Required
    if visa_status == "Required":
        breakdown["Visa Processing Delay"] = VISA_COUNTRY_DELAYS.get(
            visa_country, 15
        )
    else:
        breakdown["Visa Processing Delay"] = 0

    total = sum(breakdown.values())

    return breakdown, int(total)

