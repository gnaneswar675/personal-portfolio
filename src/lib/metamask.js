export async function connectMetaMask() {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('MetaMask is not installed');
  }

  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if (!accounts || accounts.length === 0) {
      throw new Error('No account returned by MetaMask');
    }
    return accounts[0];
  } catch (error) {
    console.error('Failed to connect to MetaMask', error);
    if (error.code === 4001) {
      throw new Error('MetaMask connection request rejected by user');
    }
    throw error;
  }
}