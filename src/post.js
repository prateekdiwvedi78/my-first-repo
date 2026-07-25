import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot
} from "firebase/firestore";

const postBtn = document.getElementById("postbtn");
const postText = document.getElementById("postText");
const postsContainer = document.getElementById("postsContainer");

// Wait for authentication
onAuthStateChanged(auth, (user) => {

    if (!user) {
        alert("Please login first.");
        window.location.href = "/index.html";
        return;
    }

    // Create a new post
    postBtn.addEventListener("click", async () => {
        const text = postText.value.trim();

        if (text === "") {
            alert("Please write something.");
            return;
        }

        try {

            await addDoc(collection(db, "posts"), {
                uid: user.uid,
                email: user.email,
                text: text,
                createdAt: serverTimestamp()
            });

            postText.value = "";
            alert("Post Created Successfully!");

        } catch (error) {

            console.error(error);
            alert(error.message);

        }

    });

    // Load all posts in real time
    const q = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc")
    );

    onSnapshot(q, (snapshot) => {

        postsContainer.innerHTML = "";

        snapshot.forEach((doc) => {

            const post = doc.data();

            postsContainer.innerHTML += `
                <div class="feed-post">

                    <div class="post-header">
                        <img src="img.jpeg" class="post-profile">

                        <div>
                            <h3>${post.email}</h3>
                            <p>${post.uid}</p>
                        </div>
                    </div>

                    <p class="post-text">
                        ${post.text}
                    </p>

                    <div class="post-actions">
                        <div class="action">👍 Like</div>
                        <div class="action">💬 Comment</div>
                        <div class="action">↗ Share</div>
                    </div>

                </div>
            `;

        });

    });

});