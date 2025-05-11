import requests
from bs4 import BeautifulSoup
import json
import re
import os

def slugify(text):
    return re.sub(r'[^a-zA-Z0-9]+', '-', text.strip().lower())

def fetch_opportunities():
    url = "https://opportunitiescorners.info/category/scholarships/scholarships-in-china/"
    resp = requests.get(url)
    soup = BeautifulSoup(resp.text, "html.parser")
    items = soup.select(".jeg_postblock_content .jeg_post_title a")[:10]
    data = []
    for item in items:
        title = item.get_text(strip=True)
        link = item['href']
        id_ = slugify(title)
        data.append({
            "id": id_,
            "title": title,
            "school": "未知",
            "region": "国际",
            "deadline": "未知",
            "link": link,
            "description": ""
        })
    return data

def main():
    os.makedirs("app/data", exist_ok=True)
    data = fetch_opportunities()
    with open("app/data/programs.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main() 