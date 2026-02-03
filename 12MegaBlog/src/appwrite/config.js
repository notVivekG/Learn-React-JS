import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query, Permission, Role, Account } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

        // 🔍 QUICK DEBUG (TEMPORARY)
        const account = new Account(this.client);
        account
        .get()
        .then((user) => {
            console.log("✅ Logged in user:", user.email);
        })
        .catch((err) => {
            console.log("❌ User NOT logged in");
        });
    }

    // Create a new post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
        return await this.databases.createDocument({
            databaseId: conf.appwriteDatabaseId,
            collectionId: conf.appwriteTablesId,
            documentId: slug,
            data: {
            title,
            content,
            featuredImage,
            status,
            userId,
            },
            permissions: [
            Permission.read(Role.users()), // ✅ users can read
            Permission.update(Role.user(userId)), // ✅ owner can update
            Permission.delete(Role.user(userId)), // ✅ owner can delete
            ],
        });
        } catch (error) {
        console.log("Appwrite service :: createPost :: error", error);
        }
    }

    // Update an existing post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
        return await this.databases.updateDocument({
            databaseId: conf.appwriteDatabaseId,
            collectionId: conf.appwriteTablesId,
            documentId: slug,
            data: {
            title,
            content,
            featuredImage,
            status,
            },
        });
        } catch (error) {
        console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    // Delete a post
    async deletePost(slug) {
        try {
        await this.databases.deleteDocument({
            databaseId: conf.appwriteDatabaseId,
            collectionId: conf.appwriteTablesId,
            documentId: slug,
        });
        return true;
        } catch (error) {
        console.log("Appwrite service :: deletePost :: error", error);
        return false;
        }
    }

    async getPost(slug) {
        try {
        return await this.databases.getDocument({
            databaseId: conf.appwriteDatabaseId,
            collectionId: conf.appwriteTablesId,
            documentId: slug,
        });
        } catch (error) {
        console.log("Appwrite service :: getPost :: error", error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
        return await this.databases.listDocuments({
            databaseId: conf.appwriteDatabaseId,
            collectionId: conf.appwriteTablesId,
            queries: queries,
        });
        } catch (error) {
        console.log("Appwrite service :: getPosts :: error", error);
        return false;
        }
    }

    // file upload service

    async uploadFile(file) {
        try {
        return await this.bucket.createFile({
            bucketId: conf.appwriteBucketId,
            fileId: ID.unique(),
            file: file,
        });
        } catch (error) {
        console.log("Appwrite service :: uploadFile :: error", error);
        }
    }

    async deleteFile(fileId) {
        try {
        await this.bucket.deleteFile({
            bucketId: conf.appwriteBucketId,
            fileId: fileId,
        });
        return true;
        } catch (error) {
        console.log("Appwrite service :: deleteFile :: error", error);
        return false;
        }
    }

    getFilePreview(fileId) {
        if (!fileId) return null;

        try {
        return this.bucket.getFileView({
            bucketId: conf.appwriteBucketId,
            fileId: fileId,
        });
        } catch (error) {
        console.log("Appwrite service :: getFilePreview :: error", error);
        return null;
        }
    }
}

const service = new Service();
export default service;
