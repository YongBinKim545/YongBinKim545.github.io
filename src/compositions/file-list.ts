import { ref } from 'vue';

interface FileStatus {
    id: string;
    file: File;
    url: string;
    status: null | any; // You might want to replace 'any' with the actual type of your 'status'
}

export default function () {
    const files = ref<FileStatus[]>([]);

    function addFiles(newFiles: File[]): void {
        let newUploadableFiles = newFiles
            .map((file) => new UploadableFile(file))
            .filter((file) => !fileExists(file.id));

        files.value = files.value.concat(newUploadableFiles);
    }

    function fileExists(otherId: string): boolean {
        return files.value.some(({ id }) => id === otherId);
    }

    function removeFile(file: FileStatus): void {
        const index = files.value.indexOf(file);

        if (index > -1) files.value.splice(index, 1);
    }

    return { files, addFiles, removeFile };
}

class UploadableFile implements FileStatus {
    id: string;
    file: File;
    url: string;
    status: null | any; // You might want to replace 'any' with the actual type of your 'status'

    constructor(file: File) {
        this.file = file;
        this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
        this.url = URL.createObjectURL(file);
        this.status = null;
    }
}