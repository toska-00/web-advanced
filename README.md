# 移动跨平台刷题检验

这是一个纯静态刷题网页，可以直接上传到 GitHub Pages 使用。

## 上传到 GitHub Pages

1. 新建一个 GitHub 仓库。
2. 把 `quiz-site` 文件夹里的所有文件上传到仓库根目录。
3. 在仓库 `Settings` -> `Pages` 里选择 `Deploy from a branch`。
4. 分支选 `main`，目录选 `/root`，保存。
5. 等 GitHub 生成网址后，手机、iPad、电脑都可以打开同一个网址刷题。

## 做题记录

- 记录保存在当前设备浏览器里。
- 换设备时，点“导出同步码”，把同步码发到另一台设备。
- 另一台设备粘贴同步码后点“导入同步码”，会合并做题记录和错题。
- 点“清空记录”可以清空当前设备的做题记录。

## 文件说明

- `index.html`：页面入口
- `styles.css`：手机/iPad/电脑样式
- `app.js`：刷题、判分、同步码逻辑
- `questions.js`：题库数据
- `manifest.webmanifest` 和 `sw.js`：支持添加到主屏幕和离线缓存
