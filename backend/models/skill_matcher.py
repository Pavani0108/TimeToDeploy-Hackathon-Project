def calculate_skill_match(required_skills, candidate_skills):

    matched = set(required_skills).intersection(set(candidate_skills))
    missing = set(required_skills) - matched

    match_percent = (len(matched) / len(required_skills)) * 100

    # ✅ Each missing skill adds ~5 deployment delay days
    gap_days = len(missing) * 5

    return {
        "match_percent": round(match_percent, 2),
        "missing_skills": list(missing),
        "estimated_gap_days": gap_days
    }
