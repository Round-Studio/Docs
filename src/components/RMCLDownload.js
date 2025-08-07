import React, { useEffect, useState } from 'react';
import styles from './RMCLDownload.module.css';

// 定义可用的源列表
const SOURCES = [
  {
    id: 'official',
    name: '官方源',
    url: '', // 官方源不需要前缀
    description: '直接从 GitHub 获取'
  },
  {
    id: 'ghllkkcc',
    name: 'gh.llkk.cc 加速地址',
    url: 'https://gh.llkk.cc/', // 修正了这里
    description: '使用第三方加速地址'
  },
  // 可以添加更多镜像源...
];

export default function RMCLDownload() {
  const [releaseData, setReleaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSource, setSelectedSource] = useState(SOURCES[0]); // 设置默认源 

  const fetchReleaseData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // 构建API URL，如果源有URL前缀就加上
      const apiUrl = `${selectedSource.url ? selectedSource.url : ''}https://api.github.com/repos/Round-Studio/Round.NET.AvaloniaApp.MinecraftLauncher/releases/latest`;
      
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('网络响应不正常');
      }
      
      const data = await response.json();
      setReleaseData(data);
    } catch (err) {
      console.error('获取数据时出错:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReleaseData();
  }, [selectedSource]);

  const handleSourceChange = (event) => {
    const sourceId = event.target.value;
    const source = SOURCES.find(s => s.id === sourceId) || SOURCES[0];
    setSelectedSource(source);
  };

  const handleRefresh = () => {
    setLoading(true);
    setError(null);
    setReleaseData(null);
    fetchReleaseData();
  };

  return (
    <div className={styles.container}>
      <div className={styles.sourceSelector}>
        <label htmlFor="source-select">选择下载源: </label>
        <select 
          id="source-select"
          value={selectedSource.id}
          onChange={handleSourceChange}
          className={styles.select}
        >
          {SOURCES.map(source => (
            <option key={source.id} value={source.id}>
              {source.name} - {source.description}
            </option>
          ))}
        </select>

        <button onClick={handleRefresh} className={styles.downloadBtn} style={{ marginLeft: '10px' }}>
            刷新
        </button>
      </div>

      {loading && (
        <div className={styles.loading}>正在获取下载列表...</div>
      )}

      {error && (
        <div className={styles.error}>
          获取下载列表失败: {error}
        </div>
      )}

      {releaseData && (
        <>
          <div className={styles.releaseInfo}>
            <h2>{releaseData.name || releaseData.tag_name}</h2>
            <p>发布日期: {new Date(releaseData.published_at).toLocaleString()}</p>
            <p>当前源: {selectedSource.name}</p>
          </div>
          
          <ul className={styles.downloadList}>
            {releaseData.assets.map(asset => {
              // 构建下载URL，如果源有URL前缀就加上
              const downloadUrl = selectedSource.url 
                ? `${selectedSource.url}${asset.browser_download_url}`
                : asset.browser_download_url;
              
              return (
                <li key={asset.id} className={styles.downloadItem}>
                  <span className={styles.downloadName}>
                    {asset.name}
                    <span className={styles.downloadCount}>下载次数: {asset.download_count}</span>
                  </span>
                  <a 
                    href={downloadUrl} 
                    className={styles.downloadBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    下载
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}