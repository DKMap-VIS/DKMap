# DKMap <a href="https://github.com/DKMap-VIS/DKMap" style="color: #65513C; font-family: 'Maiden Orange', sans-serif; font-weight: bold;"></a>
A novel DR visualization technique for interactive exploration of multimodal embeddings through Dynamic Kernel enhanced projection

<table>
  <tr>
    <td colspan="3"><video width="100%" src='https://github.com/user-attachments/assets/7f14e5cd-dec8-4372-9b86-d5672e533dac'></td>
    <td colspan="3"><video width="100%" src='https://github.com/user-attachments/assets/9f14a7ff-9024-4d3d-adf3-9390807b21eb'></td>
  </tr>
  <tr></tr>

</table>

## What is DKMap about?
DKMap helps you make sense of multimodal embeddings — especially those from vision-language models — by showing how well text and images align. Traditional methods like t-SNE often fail to accurately reflect alignment metrics due to projection distortion and over-averaging. DKMap solves this with a dynamic kernel approach that makes the visualizations both more accurate and more interactive. You can zoom in, explore local details, and use it in your browser or Jupyter notebook.

## Highlights
✨ Scalable to <strong>billions</strong> of <strong>multimodal embedding</strong> point

✨ Enables <strong>multi-resolution</strong> exploration via kernel
refinement

✨ Dynamically adjusts the granularity of the contour map for more flexible exploration.

✨ Support multi-platform development -- <strong>computational notebooks</strong> (e.g., Colab, Jupyter, VS Code) and <strong>Web-based system</strong>


## Quick Start
You can get all the source code from the latest release version.

### Web-based system
Clone or download this repository:
```bash
git clone https://github.com/DKMap-VIS/DKMap.git
```
Install the dependencies (in the Backend folder):
```bash
pip install -r requirements.txt
```
Install the dependencies (in the Frontend folder):
```bash
npm install
```
#### Path Modification (Required Before Running)
Please update the file paths in the following code file according to your local environment.
- File：`app.py\``
     - line

- File: `Main.vue\``


Then run DKMap:
```bash
npm run dev
```



