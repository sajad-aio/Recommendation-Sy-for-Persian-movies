# Recommendation-Sy-for-Persian-movies
The Persian Movie Recommendation System suggests similar Persian movies based on user input. It uses a content-based filtering algorithm with Flask, Pandas, and Scikit-learn. The system features a simple web interface built with HTML, CSS, and JavaScript.
-------------

# 🎬 سیستم پیشنهاد فیلم‌های فارسی (Persian Movie Recommendation System)

## 📌 معرفی پروژه
این پروژه یک **سیستم پیشنهاد فیلم فارسی** است که با استفاده از **Python (Flask)** و رابط کاربری ساده در **HTML, CSS, JavaScript** ساخته شده.  
کاربر با وارد کردن نام فیلم مورد علاقه خود، لیستی از فیلم‌های مشابه دریافت می‌کند.  
سیستم از یک دیتاست فیلم‌های فارسی (`data2.csv`) استفاده می‌کند و با الگوریتم‌های **پردازش داده و شباهت متنی**، نزدیک‌ترین فیلم‌ها را پیشنهاد می‌دهد.  

---

## 🚀 ویژگی‌ها
- رابط کاربری ساده و واکنش‌گرا 🌐  
- استفاده از Flask به‌عنوان بک‌اند 🐍  
- پردازش داده‌ها و سیستم توصیه‌گر بر اساس **شباهت محتوایی (Content-based Filtering)**  
- قابلیت پیشنهاد فیلم‌های مشابه با ورودی کاربر 🎥  
- دیتاست فیلم‌های فارسی برای آزمایش سیستم 📊  

---

## 📂 ساختار پروژه
```
📦 persian-movie-recommender
 ┣ 📂 static/           # فایل‌های استاتیک (CSS, JS, تصاویر و ...)
 ┣ 📂 templates/        # قالب‌های HTML (برای Flask)
 ┣ 📜 app.py            # فایل اصلی Flask (اجرای بک‌اند)
 ┣ 📜 data2.csv         # دیتاست فیلم‌های فارسی
 ┣ 📜 index.html        # صفحه اصلی وب
 ┣ 📜 script.js         # منطق فرانت‌اند (تعامل با Flask API)
 ┣ 📜 style.css         # استایل‌ها
 ┗ 📓 j1(recomandsystem).ipynb   # نوت‌بوک Jupyter برای تست الگوریتم
```

---

## ⚙️ نصب و اجرا
برای اجرای پروژه مراحل زیر را دنبال کنید:

### 1️⃣ پیش‌نیازها
- نصب Python 3.8 یا بالاتر  
- نصب کتابخانه‌های موردنیاز با دستور:
```bash
pip install flask pandas scikit-learn
```

### 2️⃣ اجرای پروژه
داخل پوشه پروژه اجرا کنید:
```bash
python app.py
```

سپس وارد مرورگر شوید و آدرس زیر را باز کنید:  
👉 `http://127.0.0.1:5000/`

---

## 📊 دیتاست
فایل `data2.csv` شامل لیستی از فیلم‌های فارسی به همراه اطلاعات زیر است:
- نام فیلم 🎬  
- توضیحات 📝  
- ژانر 📚  
- سایر مشخصات  

این دیتاست مبنای اصلی سیستم توصیه‌گر است.

---

## 🛠 تکنولوژی‌ها
- **Python (Flask)** → بک‌اند و API  
- **Pandas, Scikit-learn** → پردازش داده و الگوریتم توصیه‌گر  
- **HTML, CSS, JavaScript** → رابط کاربری  

---

## 👨‍💻 توسعه‌دهنده
این پروژه توسط **سجاد علی‌بخشی** توسعه داده شده است.  
📧 برای ارتباط: **sajadalibakhshi1389@gmail.com**  

---

# 🎬 Persian Movie Recommendation System

## 📌 Project Overview
This project is a **Persian Movie Recommendation System** built with **Python (Flask)** and a simple UI using **HTML, CSS, JavaScript**.  
Users can enter the name of a movie they like, and the system recommends a list of similar movies.  
It uses a dataset of Persian movies (`data2.csv`) and applies **content-based filtering algorithms** to find the closest matches.  

---

## 🚀 Features
- Simple and responsive UI 🌐  
- Backend powered by Flask 🐍  
- Data processing and recommendation engine using **Content-based Filtering**  
- Movie suggestions based on user input 🎥  
- Persian movie dataset for testing 📊  

---

## 📂 Project Structure
```
📦 persian-movie-recommender
 ┣ 📂 static/           # Static files (CSS, JS, images, etc.)
 ┣ 📂 templates/        # HTML templates (for Flask)
 ┣ 📜 app.py            # Main Flask backend file
 ┣ 📜 data2.csv         # Persian movies dataset
 ┣ 📜 index.html        # Main web page
 ┣ 📜 script.js         # Frontend logic (interaction with Flask API)
 ┣ 📜 style.css         # Stylesheet
 ┗ 📓 j1(recomandsystem).ipynb   # Jupyter notebook for testing the algorithm
```

---

## ⚙️ Installation & Usage

### 1️⃣ Requirements
- Python 3.8 or higher  
- Install dependencies:
```bash
pip install flask pandas scikit-learn
```

### 2️⃣ Run the project
Inside the project directory, run:
```bash
python app.py
```

Then open the following address in your browser:  
👉 `http://127.0.0.1:5000/`

---

## 📊 Dataset
The file `data2.csv` contains a list of Persian movies with the following information:
- Movie title 🎬  
- Description 📝  
- Genre 📚  
- Other metadata  

This dataset is the core of the recommendation system.

---

## 🛠 Technologies
- **Python (Flask)** → Backend and API  
- **Pandas, Scikit-learn** → Data processing and recommendation engine  
- **HTML, CSS, JavaScript** → User Interface  

---

## 👨‍💻 Developer
Developed by **Sajad Alibakhshi**  
📧 Contact: **sajadalibakhshi1389@gmail.com**
