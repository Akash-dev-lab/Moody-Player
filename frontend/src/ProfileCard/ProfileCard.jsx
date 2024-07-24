function ProfileCard() {
  return (
    <div className="bg-blue-900 rounded-xl shadow-xl p-6 text-white relative z-10">

      <div className="flex items-center justify-center mb-6">
        <img src="https://s3-alpha-sig.figma.com/img/8e3d/bf7b/28ee4eaeabfe7f9b568b4c73297e14f0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dUfyfBL1sQeodSrLHIdGjtJYKYivBnXGxVd~6dG5JaCa5Pn7l0kMwcB2GGcA9NbUfXExq~yLpy8v6GD1Hv73NaNvYWpkoWiDZR75n2poXtWyqu6~GCiJR7Jgvn2xQ0IgTPYQin0wrBkbT0-~mAdml9JD6MC7DzRsSyzPevPG3nUQgH0r1M-0ONmWiv1nAgY9CAec7R2zSeR-WtUjbYhtASwoQJ74UDfMzoeea9d5~a72xlni0NZ~fw5PCsHpmFiaG4tRrTgktMi5UQqKTt~J8wjvLkUxhZZhatwCpY9lV-K3~qGMcaGUOzmlbz73vFIxwhbfCfRvmIbbo3urM-sfRw__" alt="Profile Picture" className="rounded-full w-32 h-32" />
      </div>
      <h1 className="text-2xl font-bold mb-2">Alex</h1>
      <p className="text-gray-400 mb-4">HND in Computing</p>
      <p className="text-gray-400 mb-4">
        A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mb-4">
        joeylenerivera@gmail.com
      </button>
      <div className="flex justify-center">
        <a href="#" className="text-gray-400 hover:text-white mr-4">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white mr-4">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white mr-4">
          <i className="fab fa-github" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-dev" />
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
