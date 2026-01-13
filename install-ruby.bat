@echo off
echo ========================================
echo Ruby + Jekyll 安装指南
echo ========================================
echo.
echo 步骤 1: 下载 RubyInstaller
echo 请访问: https://rubyinstaller.org/downloads/
echo 下载: Ruby+Devkit 3.2.x (x64)
echo.
echo 步骤 2: 安装 Ruby
echo - 运行下载的安装程序
echo - 勾选 "Add Ruby executables to your PATH"
echo - 完成安装后，在 MSYS2 窗口选择选项 3
echo.
echo 步骤 3: 关闭此窗口，重新打开 PowerShell/CMD
echo.
echo 步骤 4: 运行以下命令:
echo   cd TidalHarley.github.io
echo   gem install jekyll bundler
echo   bundle install
echo   bundle exec jekyll serve
echo.
echo 然后访问: http://localhost:4000
echo.
pause
