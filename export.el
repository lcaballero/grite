(progn
  (org-mode)
  (setq org-confirm-babel-evaluate nil)
  (setq org-html-head ""
        org-html-head-extra ""
        org-html-head-include-default-style nil
        org-html-head-include-scripts nil
        org-html-preamble nil
        org-html-postamble nil
        org-html-use-infojs nil)
  
  (insert "#+OPTIONS: toc:nil\n")
  (insert "#+OPTIONS: num:nil\n")

  (setq file (format "%s.html" (getenv "EXPORT_NAME")))

  (org-export-to-file 'html file nil nil nil t)
  
  (find-file file)
  (indent-region (point-min) (point-max))
  (save-buffer))

(defun no-op ()
  (add-to-list 'org-src-lang-modes '("inline-js" . javascript)) ;; js2 if you're fancy
  (defvar org-babel-default-header-args:inline-js
    '((:results . "html")
      (:exports . "results"))))

(defun org-babel-execute:inline-js (body _params)
  (format "<script type=\"text/javascript\">\n%s\n</script>" body))


