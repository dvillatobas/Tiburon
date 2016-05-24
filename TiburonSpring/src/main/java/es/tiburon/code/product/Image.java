package es.tiburon.code.product;

public class Image {

	private String fileName;

	public Image(String fileName) {
		super();
		this.fileName = fileName;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	@Override
	public String toString() {
		return "Image [description=" + ", fileName=" + fileName + "]";
	}

}
